package droll.notice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import droll.notice.mapper.NoticeMapper;

@Service
public class NoticeServiceImpl {

	@Autowired
	NoticeMapper noticeMapper;
	
	public List<Map<String, Object>> selectList() {
		return noticeMapper.selectList();
	}

	public void create(Map<String, Object> params) {
		noticeMapper.create(params);
	}

}
