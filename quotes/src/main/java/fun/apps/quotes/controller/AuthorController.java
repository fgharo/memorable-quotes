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
import fun.apps.quotes.model.Author;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/author")
public class AuthorController {
	
	Collection<Author> data = Arrays.asList(
			Author.builder()
			._id("0")
			.firstName("Franklin")
			.middleName("Delano")
			.lastName("Roosevelt")
			//.birthDate(LocalDate.of(1882, 1, 30))
			.birth(ApproximateDate.builder().year(1882).month(1).day(30).build())
			.death(ApproximateDate.builder().year(1945).month(4).day(12).build())
			.primaryProfession("Politician - United States President")
			.build(),
			
			Author.builder()
			._id("1")
			.firstName("Francis")
			.lastName("Bacon")
			.birth(ApproximateDate.builder().year(1561).month(1).day(22).build())
			.death(ApproximateDate.builder().year(1626).month(4).day(9).build())
			.primaryProfession("Philisopher of Science")
			.build(),
			
			Author.builder()
			._id("2")
			.firstName("Reinhold")
			.lastName("Niebuhr")
			.birth(ApproximateDate.builder().year(1892).month(6).day(21).build())
			.death(ApproximateDate.builder().year(1971).month(6).day(1).build())
			.primaryProfession("Theologian")
			.build(),
			
			Author.builder()
			._id("3")
			.firstName("Malcom")
			.lastName("X")
			.birth(ApproximateDate.builder().year(1925).month(5).day(19).build())
			.death(ApproximateDate.builder().year(1965).month(2).day(21).build())
			.primaryProfession("American Muslim Minister & Human Rights Activist")
			.build(),
			
			Author.builder()
			._id("4")
			.firstName("David")
			.lastName("Hume")
			.birth(ApproximateDate.builder().year(1711).month(5).day(7).build())
			.death(ApproximateDate.builder().year(1776).month(8).day(25).build())
			.primaryProfession("Scottish Philosopher & Historian")
			.build(),
			
			Author.builder()
			._id("5")
			.firstName("Ayn")
			.lastName("Rand")
			.birth(ApproximateDate.builder().year(1905).month(2).day(2).build())
			.death(ApproximateDate.builder().year(1982).month(3).day(6).build())
			.primaryProfession("Russian-American writer & Philosopher")
			.build()
	);

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Author> getAllQuotes(){		
		log.info("Being contacted");
		return data;
	}
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, params = {"id"})
	public Author getInfoSource(@RequestParam("id") String id){		
		log.info("Being contacted");
		Author result = null;
		for(Author source : data) {
			if(source.get_id().equalsIgnoreCase(id)) {
				result = source;
				break;
			}
		}
		return result;
	}
}
