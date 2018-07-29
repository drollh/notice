package droll.notice.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoticeController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	  @RequestMapping(value = "/", method = RequestMethod.GET)
	  public String home(Locale locale, Model model) {
		  
		  logger.debug("디버그");
		  logger.info("인포");
		  Date date = new Date();
	      DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
	          
	      String formattedDate = dateFormat.format(date);
	          
	      model.addAttribute("serverTime", formattedDate );

	      return "index";
	  }
}
