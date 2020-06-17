package fun.apps.quotes.model;

import java.io.Serializable;
import java.util.Collection;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Quote implements Serializable{
	private static final long serialVersionUID = -6499866882889134213L;
	private String _id;
	private String quotation; 
	private String author_id;
	private String informationsource_id;
	private Collection<Note> notes;
}
