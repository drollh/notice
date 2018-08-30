package droll.codility;

import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Exam004 {

	// 1..(n+1) 없는 숫자 찾기
	@RequestMapping(value = "/exam004.do")
	public void main() {

		int[] A = {2,3,1,5};

		long N = A.length + 1;
		long sum = N * (N + 1) / 2;
		for (int i = 0; i < A.length; i++) {
			sum -= A[i];
		}
		
		//return (int) sum;
		
	}

} 