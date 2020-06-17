package fun.apps.quotes.controller;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fun.apps.quotes.model.ApproximateDate;
import fun.apps.quotes.model.InformationSource;
import fun.apps.quotes.model.Quote;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/informationsource")
public class InformationSourceController {

	
	Collection<InformationSource> data = Arrays.asList(
			InformationSource.builder()
			._id("0")
			.type("Speech")
			.title("Oglethorpe University Address")
			.originDate(ApproximateDate.builder().year(1932).month(5).day(22).build())
			.build(),
			
			InformationSource.builder()
			._id("1")
			.type("Book")
			.title("The New Organon")
			.originDate(ApproximateDate.builder().year(1857).build())
			.build(),
			
			InformationSource.builder()
			._id("2")
			.type("Prayer")
			.title("Serenity Prayer")
			.originDate(ApproximateDate.builder().year(1933).build())
			.build(),
			
			InformationSource.builder()
			._id("3")
			.type("Letter")
			.title("Mecca Letter")
			.originDate(ApproximateDate.builder().year(1965).build())
			.build(),
			
			InformationSource.builder()
			._id("4")
			.type("Book")
			.title("A Treatise of Human Nature")
			.originDate(ApproximateDate.builder().year(1739).build())
			.build(),
			
			InformationSource.builder()
			._id("5")
			.type("Book")
			.title("The Virtue of Selfishness")
			.originDate(ApproximateDate.builder().year(1964).build())
			.build()
			
	);
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<InformationSource> getAllInfoSources(){		
		log.info("Being contacted");
		return data;
	}
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, params = {"id"})
	public InformationSource getInfoSource(@RequestParam("id") String id){		
		log.info("Being contacted");
		InformationSource result = null;
		for(InformationSource source : data) {
			if(source.get_id().equalsIgnoreCase(id)) {
				result = source;
				break;
			}
		}
		return result;
	}
}
