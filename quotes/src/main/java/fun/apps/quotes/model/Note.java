package fun.apps.quotes.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Note implements Serializable{
	private LocalDate date;
	private String thoughts;
}
