package fun.apps.quotes.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fun.apps.quotes.model.ApproximateDate;
import fun.apps.quotes.model.Author;
import fun.apps.quotes.model.InformationSource;
import fun.apps.quotes.model.Note;
import fun.apps.quotes.model.Quote;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/quote")
public class QuoteController {
	Collection<Quote> data = Arrays.asList(
			Quote.builder()
			.quotation("Take a method and try it. If it fails, admit it and try another. But aboveall, try something.")
			.notes(
					Arrays.asList(
							Note.builder()
								.thoughts("Change is a part of human nature. We either evade it or accept it. Roosevelt's thinks we ought to choose life and try something.")
								.date(LocalDate.now())
								.build()
					)
			)
			._id("0")
			.author_id("0")
			.informationsource_id("0")
			.build(),
			
			Quote.builder()
			.quotation("Human knowledge and human power meet in one; for where the cause is not known the effect cannot be produced. Nature to be commanded must be obeyed; and that which in contemplation is as the cause is in operation as the rule.")
			._id("1")
			.author_id("1")
			.informationsource_id("1")
			.build(),
			
			Quote.builder()
			.quotation("Father, give us courage to change what must be altered, serenity to accept what cannot be helped, and the insight to know the one from the other." )
			._id("2")
			.author_id("2")
			.informationsource_id("2")
			.build(),
			
			Quote.builder()
			.quotation("I'm for truth, no matter who tells it. I'm for justice, no matter who it is for or against. I'm a human being, first and foremost, and as such I'm for whoever and whatever benefits humanity as a whole.")
			._id("3")
			.author_id("3")
			.informationsource_id("3")
			.build(),
			
			Quote.builder()
			.quotation("In every system of morality, which I have hitherto met with, I have always remarked, that the author proceeds for some time in the ordinary way of reasoning, and establishes the being of a God, or makes observations concerning human affairs; when of a sudden I am surprised to find, that instead of the usual copulations of propositions, is, and is not, I meet with no proposition that is not connected with an ought, or an ought not. This change is imperceptible; but is, however, of the last consequence. For as this ought, or ought not, expresses some new relation or affirmation, 'tis necessary that it should be observed and explained; and at the same time that a reason should be given, for what seems altogether inconceivable, how this new relation can be a deduction from others, which are entirely different from it. But as authors do not commonly use this precaution, I shall presume to recommend it to the readers; and am persuaded, that this small attention would subvert all the vulgar systems of morality, and let us see, that the distinction of vice and virtue is not founded merely on the relations of objects, nor is perceived by reason.")
			._id("4")
			.author_id("4")
			.informationsource_id("4")
			.build(),
			
			Quote.builder()
			.quotation("No philosopher has given a rational, objectively demonstrable, scientific answer to the question of why man needs a code of values. So long as that question remained unanswered, no rational, scientific, objective code of ethics could be discovered or defined.")
			._id("5")
			.author_id("5")
			.informationsource_id("5")
			.build(),
			
			Quote.builder()
			.quotation("It is only an ultimate goal, and end in itself, that makes the existence of values possible. Metaphysically, life is the only phenomenon that is an end in itself: a value gained and kept by a constant process of action. Epistemologically, the concept of “value” is genetically dependent upon and derived from the antecedent concept of “life.” To speak of “value” as apart from “life” is worse than a contradiction in terms. “It is only the concept of ‘Life’ that makes the concept of ‘Value’ possible.”\n" + 
					"\n" + 
					"In answer to those philosophers who claim that no relation can be established between ultimate ends or values and the facts of reality, let me stress that the fact that living entities exist and function necessitates the existence of values and of an ultimate value which for any given living entity is its own life. Thus the validation of value judgments is to be achieved by reference to the facts of reality. The fact that a living entity is, determines what it ought to do. So much for the issue of the relation between “is” and “ought.”")
			._id("6")
			.author_id("5")
			.informationsource_id("5")
			.build()
	);

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Quote> getAllQuotes(){		
		log.info("Being contacted");
		return data;
	}
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, params = {"id"})
	public Quote getQuoteById(@RequestParam("id") String id){		
		log.info("Being contacted");
		Quote result = null;
		for(Quote source : data) {
			if(source.get_id().equalsIgnoreCase(id)) {
				result = source;
				break;
			}
		}
		return result;
	}
	
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, params = {"random"})
	public Quote randomQuote(){		
		log.info("Being contacted");
		Quote result = null;

		if(data instanceof List) {
			int randomIndex = (int)(Math.random()*data.size());
			result = ((List<Quote>) data).get(randomIndex);
		}
		
		return result;
	}
	
	
	
	
}
