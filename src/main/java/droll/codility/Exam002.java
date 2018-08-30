package droll.codility;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Exam002 {

	// [0,1,2,3] > 2입력 
	// > [3,0,1,2] -> [2,3,0,1] 이런식으로 변환
	@RequestMapping(value = "/exam002.do")
	public void main() {

		int[] arr = {7,8,2,4,7,6,2,1,4};
		int[] resultArr = new int[arr.length];
		
		int cnt = 5;
		
		if (arr.length == 0){
            //return arr;
        }
		
        int cycleCnt = cnt % arr.length;
        
        int index = arr.length - cycleCnt;
        
        // 1 : 원본
        // 2 : 원본의 시작점
        // 3 : 복사본
        // 4 : 복사본의 시작점
        // 5 : 복사본의 끝점
        System.arraycopy( arr, index, resultArr, 0, cycleCnt);
        
        if (index > 0){
            System.arraycopy( arr, 0, resultArr, cycleCnt, index);
        }
        
        //return resultArr;
	}

}
