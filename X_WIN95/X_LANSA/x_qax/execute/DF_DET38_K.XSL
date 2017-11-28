<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="Employees" select="//EMPLOYEE" /> 
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
  <div>Report : Current Departmental Assignments</div>
  <div><span>Printed : </span><span><xsl:value-of select="EXTRACT/DATE_START"/></span><span> at </span><span><xsl:value-of select="EXTRACT/TIME_START"/></span><span> by </span><span><xsl:value-of select="EXTRACT/PRINTED_BY"/></span></div> 
  <p></p>
  <p></p>
   <xsl:for-each select="$Employees">
   <xsl:sort select="DEPARTMENT"/> 
   <xsl:variable name="Department" select="DEPARTMENT" /> 
	   <xsl:if test="generate-id(.)=generate-id($Employees[DEPARTMENT=$Department])">
		   <h3 align="center">
		   <xsl:value-of select="DEPARTMENT_DESCRIPTION" /> (<xsl:value-of select="DEPARTMENT" />) 
		   </h3>
		   <table style='font:menu' border="1" align="center">
		   <tr>
		   <th bgcolor="lightgreen">Number</th> 
		   <th bgcolor="lightgreen">Full Name</th> 
		   </tr>
			   <xsl:for-each select="$Employees[DEPARTMENT=$Department]">
			   <xsl:sort select="LAST_NAME" /> 
			   <tr>
			   <td>
			   <xsl:value-of select="NUMBER" /> 
			   </td>
			   <td>
			   <xsl:value-of select="FULL_NAME" /> 
			   </td>
			   </tr>
			   </xsl:for-each>
		   </table>
	   </xsl:if>
   </xsl:for-each>
<p></p>
<p></p>
<div>Printed on <xsl:value-of select="EXTRACT/DATE_START"/> at <xsl:value-of select="EXTRACT/TIME_START"/></div>
<div>Details of <xsl:value-of select="EXTRACT/OBJECT_COUNT"/> employees were printed.</div>
<div>*** End of Report ***</div>
</body>
</html>  
</xsl:template>
</xsl:stylesheet>  