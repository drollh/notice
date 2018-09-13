package droll.config;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.navercorp.lucy.security.xss.servletfilter.XssEscapeServletFilter;

import droll.common.interceptor.CertificationInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	CertificationInterceptor certificationInterceptor;

	@Override
	// 인터셉터
	public void addInterceptors(InterceptorRegistry registry) {
		// 권한 
		registry.addInterceptor(certificationInterceptor)
				.addPathPatterns("/**/*.do")
				.order(0);
		// 메세지
		registry.addInterceptor(localeChangeInterceptor()).order(1);
	}

	// XSS 필터
	// 방어 시점은 URL 호출이 아니라, getParameter(), getParameterValues() 등의 메소드 호출 시
	@Bean
	public FilterRegistrationBean<XssEscapeServletFilter> getFilterRegistrationBean() {
		FilterRegistrationBean<XssEscapeServletFilter> registrationBean = new FilterRegistrationBean<XssEscapeServletFilter>();
		registrationBean.setFilter(new XssEscapeServletFilter());
		registrationBean.setOrder(1);
		registrationBean.addUrlPatterns("*.do"); // 패턴
		return registrationBean;
	}

	@Bean
	// ModelAndView로 전부 사용하기 위해 매핑잭슨 등록
	MappingJackson2JsonView jsonView() {
		return new MappingJackson2JsonView();
	}

	@Bean
	// 메세지 소스 세팅
	public MessageSource messageSource() { 
		ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource(); 
		//WEB-INF 밑에 해당 폴더에서 properties를 찾는다. 
		messageSource.setBasename("properties/messages"); 
		messageSource.setDefaultEncoding("UTF-8"); 
		messageSource.setCacheSeconds(10); // reload messages every 10 seconds
		return messageSource; 
	}
   
	@Bean
	// 메세지 엑세서 MessageSource 사용해도 되는데, 메소드가 더 많음
	public MessageSourceAccessor getMessageSourceAccessor(){
		return new MessageSourceAccessor(messageSource());
	}
	
	@Bean 
	//request로 넘어오는 language parameter를 받아서 locale로 설정 한다. 
	public LocaleChangeInterceptor localeChangeInterceptor(){ 
		LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor(); 

		localeChangeInterceptor.setParamName("lang");
				
		return localeChangeInterceptor; 
	} 
	
	@Bean(name = "localeResolver") 
	public LocaleResolver sessionLocaleResolver(){
		//세션 기준으로 로케일을 설정 한다. 
		SessionLocaleResolver localeResolver=new SessionLocaleResolver(); 
		//쿠키 기준(세션이 끊겨도 브라우져에 설정된 쿠키 기준으로) 
		// CookieLocaleResolver localeResolver = new CookieLocaleResolver(); 
		//최초 기본 로케일을 강제로 설정이 가능 하다. 
		localeResolver.setDefaultLocale(Locale.KOREA); 
		return localeResolver; 
	} 
}