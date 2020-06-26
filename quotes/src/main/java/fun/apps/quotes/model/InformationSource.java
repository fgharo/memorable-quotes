package fun.apps.quotes.model;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
public class InformationSource implements Serializable{
	private static final long serialVersionUID = 1L;
	private String _id;
	private String type;
	private String title;
	private Integer numberOfPages;
	private ApproximateDate originDate;
	
}
