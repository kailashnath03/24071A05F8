import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RentServlet extends HttpServlet {

    public void doPost(HttpServletRequest req, HttpServletResponse res)
            throws IOException, ServletException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        int days = Integer.parseInt(req.getParameter("days"));
        int rentPerDay = Integer.parseInt(req.getParameter("rent"));

        int total = days * rentPerDay;

        out.println("<html><body>");

        out.println("<h2>Room Rent Calculation</h2>");
        out.println("<h3>ID: 24071a05f8</h3><br>");

        out.println("Number of Days: " + days + "<br>");
        out.println("Rent per Day: " + rentPerDay + "<br>");
        out.println("<b>Total Rent: " + total + "</b><br>");

        // Footer (same as HTML page)
        out.println("<br><hr>");
        out.println("<center>Copyright © 24071a05f8. All rights reserved.</center>");

        out.println("</body></html>");
        out.close();
    }
}