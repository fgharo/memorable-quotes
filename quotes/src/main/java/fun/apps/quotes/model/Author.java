package fun.apps.quotes.model;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;
import lombok.AllArgsConstructor;

@Builder
@Data
@AllArgsConstructor
public class Author implements Serializable{
	private static final long serialVersionUID = 1L;
	private String _id;
	private String firstName;
	private String middleName;
	private String lastName;
	private String primaryProfession;
	private Image image;
	
	private ApproximateDate birth;
	private ApproximateDate death;
}
