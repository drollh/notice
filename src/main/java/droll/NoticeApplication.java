package droll;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

@SpringBootApplication
@EnableAspectJAutoProxy
public class NoticeApplication extends SpringBootServletInitializer {

	// 외부 톰캣 사용
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(this.getClass());
    }
	
	public static void main(String[] args) {
		SpringApplication.run(NoticeApplication.class, args);
	}

    @Bean
    MappingJackson2JsonView jsonView(){
        return new MappingJackson2JsonView();
    }

}
