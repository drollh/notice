package droll.notice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import droll.notice.service.NoticeServiceImpl;

@RestController
@Aspect
public class NoticeController {
	
	@Autowired
	NoticeServiceImpl noticeServiceImpl;
	
	@RequestMapping(value = "/notice/viewList.do")
	public ModelAndView viewList(HttpServletRequest req) throws Exception {
		ModelAndView mv = new ModelAndView("/notice/noticeListR");
		List<Map<String, Object>> list = noticeServiceImpl.selectList();
		mv.addObject("list", list);

		return mv;
	}

	@RequestMapping(value = "/notice/viewDetail.do")
	public ModelAndView create(HttpServletRequest req) throws Exception {
		ModelAndView mv = new ModelAndView();
		
		List<Map<String, Object>> list = noticeServiceImpl.selectList();
		mv.addObject("list", list);
		
		return mv;
	}
}
