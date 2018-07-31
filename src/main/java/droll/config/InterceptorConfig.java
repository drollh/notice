package droll.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import droll.common.interceptor.CertificationInterceptor;


@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    
    @Autowired
    CertificationInterceptor certificationInterceptor;
    
	@Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(certificationInterceptor)
                .addPathPatterns("/**/*.do");
    }
}