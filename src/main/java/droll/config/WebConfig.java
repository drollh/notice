package droll.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.navercorp.lucy.security.xss.servletfilter.XssEscapeServletFilter;

import droll.common.interceptor.CertificationInterceptor;


@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Autowired
    CertificationInterceptor certificationInterceptor;
    
	@Override
	// 인터셉터
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(certificationInterceptor)
                .addPathPatterns("/**/*.do");
    }
	
	// XSS 필터
	// 방어 시점은 URL 호출이 아니라, getParameter(), getParameterValues() 등의 메소드 호출 시 
    @Bean
    public FilterRegistrationBean<XssEscapeServletFilter> getFilterRegistrationBean(){
        FilterRegistrationBean<XssEscapeServletFilter> registrationBean = new FilterRegistrationBean<XssEscapeServletFilter>();
        registrationBean.setFilter(new XssEscapeServletFilter());
        registrationBean.setOrder(1);
        registrationBean.addUrlPatterns("*.do");  // l패턴
        return registrationBean;
    }	
}