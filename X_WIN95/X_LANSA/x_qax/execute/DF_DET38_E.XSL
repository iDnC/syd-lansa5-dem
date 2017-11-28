<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
  <div>Report : Employee Quick List</div>
  <div><span>Printed : </span><span><xsl:value-of select="EXTRACT/DATE_START"/></span><span> at </span><span><xsl:value-of select="EXTRACT/TIME_START"/></span><span> by </span><span><xsl:value-of select="EXTRACT/PRINTED_BY"/></span></div> 
  <p></p>
  <p></p>
    <table style='font:menu'>
    <TR>
	<TD><U><B>Number</B></U></TD>
	<TD><U><B>Given Name</B></U></TD>
	<TD><U><B>Last Name</B></U></TD>
	</TR> 
    <xsl:for-each select="EXTRACT/EMPLOYEE">
    <TR>    
    <TD><xsl:value-of select="NUMBER"/></TD>
    <TD><xsl:value-of select="FIRST_NAME"/></TD>
    <TD><xsl:value-of select="LAST_NAME"/></TD>
    </TR>   
    </xsl:for-each>
    </table>
<p></p>
<p></p>
<div>Printed on <xsl:value-of select="EXTRACT/DATE_START"/> at <xsl:value-of select="EXTRACT/TIME_START"/></div>
<div>Details of <xsl:value-of select="EXTRACT/OBJECT_COUNT"/> employees were printed.</div>
<div>*** End of Report ***</div>
</body>
</html>  
</xsl:template>
</xsl:stylesheet>