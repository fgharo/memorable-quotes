package fun.apps.quotes.model;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

/*
 * 	INTERVIEW,
	SPEECH,
	ARTICLE,
	ESSAY,
	BOOK,
	MAGAZINE,
 */
@Builder
@Data
public class InformationSource implements Serializable{
	private String _id;
	private String type;
	private String title;
	private Integer numberOfPages;
	private ApproximateDate originDate;
	
}
