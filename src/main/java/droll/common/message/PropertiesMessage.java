package droll.common.message;

import java.io.InputStream;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ModelAndView;

@RestController
@Aspect
public class PropertiesMessage {
	@Autowired
	LocaleResolver localeResolver;
	   
    @RequestMapping("/retrieveMessage.do")
    public ModelAndView retrieveMessage(HttpServletRequest request) throws Exception {
    	ModelAndView mv = new ModelAndView("jsonView");
    	
    	String propertiesName = "messages_" + localeResolver.resolveLocale(request);
    	Resource resource = new ClassPathResource("/properties/" + propertiesName + ".properties");
    	InputStream inputStream = resource.getInputStream();
    	
    	List<String> messages = IOUtils.readLines(inputStream);
    	
/*    	String param = (String) params.get("code");
    	String result = "";
        
        for(String message : messages) {
        	if(param.equals(message.split("=")[0])) {
        		result = message.split("=")[1];
        		break;
        	};
        }*/
        
        //IOUtils.writeLines(readLines, null, outputStream);
        IOUtils.closeQuietly(inputStream);
        //IOUtils.closeQuietly(outputStream);
        mv.addObject("message", messages);
        
    	return mv;
    }
}