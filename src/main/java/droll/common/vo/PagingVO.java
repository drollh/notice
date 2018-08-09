package droll.common.vo;

import javax.servlet.http.HttpServletRequest;

import lombok.Getter;

@Getter
public class PagingVO {

	private int rows;
	private int page;
	private int total;
	private String sidx;
	private String sord;
	private int start;
	private int end;

	public PagingVO(HttpServletRequest request){
		this.rows  = Integer.parseInt((request.getParameter("rows")));
		this.page  = Integer.parseInt((request.getParameter("page")));
		this.total = Integer.parseInt((request.getParameter("totalrows")));
		this.sidx  = request.getParameter("sidx");
		this.sord  = request.getParameter("sord");
		this.start  = (page-1) * rows;
		this.end  = (page * rows);
	}
}
