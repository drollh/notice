package droll.codility;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Exam001 {

	// "10001001" 1사이의 갭을 구하는 문제
	@RequestMapping(value = "/exam001.do")
	public void main() {
		int n = 0;
		String binary = Integer.toBinaryString(n);
		//String binary = "00100001000100";
		
		int curPoint = 0;
		int nextPoint = 0;
		int tmpResult = 0;
		int result = 0;
		
		int len = binary.length();
		
		while(len > curPoint ) {
			if(curPoint == 0 ) {
				curPoint = binary.indexOf("1");	
			}
			
			nextPoint = binary.indexOf("1", curPoint + 1);

			tmpResult = nextPoint - curPoint - 1;
			
			curPoint = nextPoint;
			
			if(tmpResult > result) {
				result = tmpResult;
			}
			
			if(binary.lastIndexOf("1") == curPoint) break;
		}
	}

}
