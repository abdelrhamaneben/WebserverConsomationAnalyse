package packagetest;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/test")
public class test extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public test() {
        super();
       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int i = 0,j = 1, s;
		while(i < 10000) {
			System.out.println("Un tour");
			s = 1;
			for(j = 1;j < 100; j++) {
				s = j * s;
			}
			i++;
		}
		response.getWriter().append("PAPY PAPY ");
	}
}
