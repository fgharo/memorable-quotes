package fun.apps.quotes.model;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ApproximateDate implements Serializable{
	private Integer year;
	private Integer month;
	private Integer day;
}
