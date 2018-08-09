package droll.notice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
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
	public ModelAndView viewList(HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("/notice/noticeListR");

		return mv;
	}

	@RequestMapping(value = "/notice/viewDetail.do")
	public ModelAndView create(HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("/notice/noticeC");
		
		return mv;
	}
	
	@RequestMapping(value = "/notice/create.do")
	public ModelAndView create(@RequestBody Map<String, Object> params, HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("jsonView");
		
		noticeServiceImpl.create(params);
		
		mv.addObject("result", params);
		
 		return mv;
	}

	@RequestMapping(value = "/notice/retrieve.do")
	public ModelAndView retrieve(HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("jsonView");
		
		List<Map<String, Object>> list = noticeServiceImpl.selectList();
		mv.addObject("gridList", list);

		return mv;
	}
	
/*	@RequestMapping(value = "/sample/openBoardDetail.do")
	public ModelAndView openBoardDetail(CommandMap commandMap) throws Exception {
		ModelAndView mv = new ModelAndView("/sample/boardDetail");
		Map<String, Object> map = sampleService.selectBoardDetail(commandMap.getMap());
		mv.addObject("map", map.get("map"));
		mv.addObject("list", map.get("list"));

		return mv;
	}

	@RequestMapping(value = "/sample/openBoardUpdate.do")
	public ModelAndView openBoardUpdate(CommandMap commandMap) throws Exception {
		ModelAndView mv = new ModelAndView("/sample/boardUpdate");
		Map<String, Object> map = sampleService.selectBoardDetail(commandMap.getMap());
		mv.addObject("map", map.get("map"));
		mv.addObject("list", map.get("list"));
		return mv;
	}

	@RequestMapping(value = "/sample/updateBoard.do")
	public ModelAndView updateBoard(CommandMap commandMap, HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("redirect:/sample/openBoardDetail.do");
		sampleService.updateBoard(commandMap.getMap(), request);
		mv.addObject("IDX", commandMap.get("IDX"));
		return mv;
	}

	@RequestMapping(value = "/sample/deleteBoard.do")
	public ModelAndView deleteBoard(CommandMap commandMap) throws Exception {
		ModelAndView mv = new ModelAndView("redirect:/sample/openBoardList.do");
		sampleService.deleteBoard(commandMap.getMap());
		return mv;
	}*/

}
