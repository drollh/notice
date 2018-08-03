package droll.common.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

@Component
public class CommonUtil {

/*	public static JSONObject readJSONObjectFromRequest(HttpServletRequest request) throws IOException  {
        
		StringBuffer jsonBuffer = new StringBuffer();
		JSONObject jo = new JSONObject();
		String line = null;
		try {
			BufferedReader reader = request.getReader();
			while ((line = reader.readLine()) != null) {
				line = line.replaceAll("%(?![0-9a-fA-F]{2})", "%25");
				jsonBuffer.append(URLDecoder.decode(line, "UTF-8"));
			}
			
            if(jsonBuffer.toString().indexOf("{") == 0 ) {
            	jo = JSONObject.fromObject(jsonBuffer.toString().replaceAll("\n", "<BR>"));
            }
            else {
            	jo = JSONObject.fromObject(jsonBuffer.toString().substring(jsonBuffer.toString().indexOf("=")+1).replaceAll("\n", "<BR>"));
            }

		} catch (IOException e) {
			throw new IOException();
			// TODO: handle exception
		}
		return jo;
	}
	
	public static void setJsonObjectReturnString(JSONObject jObject) throws Throwable  {
        if (jObject == null) {
            return;
        }

        JSONArray names = jObject.names();
        String name = "";
        Object o;
        for (int i = 0; i < names.size(); i++) {
            name = String.valueOf(names.get(i));
            o = jObject.get(name);
            if (o instanceof String) {
                jObject.put(name, URLDecoder.decode(((String) o).replaceAll("<BR>", "\n"), "UTF-8"));
            } else if (o instanceof JSONObject) {
                setJsonObjectReturnString((JSONObject) o);
            } else if (o instanceof JSONArray) {
                setJosnArrayReturnString((JSONArray) o);
            }
        }
    }

    public static void setJosnArrayReturnString(JSONArray jsonArray) throws Throwable {
        if (jsonArray == null) {
            return;
        }

        Object o;
        for (int i = 0; i < jsonArray.size(); i++) {
            o = jsonArray.get(i);
            if (o instanceof String) {
                o = URLDecoder.decode(((String) o).replaceAll("<BR>", "\n"), "UTF-8");
            } else if (o instanceof JSONObject) {
                setJsonObjectReturnString((JSONObject) o);
            } else if (o instanceof JSONArray) {
                setJosnArrayReturnString((JSONArray) o);
            }
        }
    }
	
	public static void paramFromMap(Map<String,String> commandMap, HttpServletRequest request){
		
		for(Iterator it=commandMap.keySet().iterator();it.hasNext();){
			String key = (String) it.next();
			String value = (String) commandMap.get(key);
			request.setAttribute(key, value);
		}
	}*/
	
}
