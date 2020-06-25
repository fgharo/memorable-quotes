package fun.apps.quotes.controller;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.NotFound;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;


/**
 * References:
 * https://www.baeldung.com/rest-template
 * 
 * @author fharo
 *
 */

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/image")
public class ImageFileController {

	@Data
	class FormWrapper {
		private MultipartFile file;
		
	}
	
	String droppyUrl = "http://fedoramachine:8989/!/";
	
	@GetMapping(path="/{fileName}", produces="image/png")
	@ResponseBody
	public ResponseEntity<?> download(@PathVariable("fileName") String fileName){
		RestTemplate rt = new RestTemplate();

		try {
			log.info("Trying to download image.");
			return rt.getForEntity(droppyUrl + "dl/" + fileName, ByteArrayResource.class);			
		}catch(NotFound e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(consumes= {"multipart/form-data"}, produces= {"text/plain"})
	public ResponseEntity<?> upload(@RequestHeader HttpHeaders headers, @ModelAttribute FormWrapper uploadRequestData) {
		try {

			MultiValueMap<String, Object> map= new LinkedMultiValueMap<>();
			map.add("file", uploadRequestData.file.getResource());
			HttpEntity<MultiValueMap<String, Object>> request = new HttpEntity<>(map, headers);
			
			RestTemplate rt = new RestTemplate();
			rt.postForEntity(droppyUrl + "upload?vId=0&to=/&rename=0", request, String.class);
			return new ResponseEntity<>("File uploaded successfully.",HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}		
	}
	
}
