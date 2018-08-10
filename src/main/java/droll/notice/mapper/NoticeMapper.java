package droll.notice.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeMapper {
	public List<Map<String, Object>> retrieveList();

	public void create(Map<String, Object> params);

	public Map<String, Object> retrieve(Map<String, Object> params);

	public void updateCnt(Map<String, Object> params);
}
