package fun.apps.quotes.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Image {
	private String fileName;
	private Integer width;
	private Integer height;
}
