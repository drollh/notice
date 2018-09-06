package droll.iframe;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@Aspect
public class Iframe {

	// 리스트 이동
	@RequestMapping(value = "/iframe.do")
	public ModelAndView viewList(HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("/iframe");

		return mv;
	}
}
