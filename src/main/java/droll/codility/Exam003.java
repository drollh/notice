package droll.codility;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Exam003 {

	// x가 y보다 크기위해선 d가 몇 번 더해져야 하는지
	@RequestMapping(value = "/exam003.do")
	public void main() {

		int x = 10;
		int y = 85;
		int d = 30;

		int tmp = y-x;
		
		int result = 0;
		
		//tmp%d == 0 ? tmp/d : tmp/d + 1;
	}
}