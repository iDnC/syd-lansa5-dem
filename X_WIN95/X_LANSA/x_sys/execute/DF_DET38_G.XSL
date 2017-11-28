<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
  <div>Report : Employee Phone List - Phone Number Order</div>
  <div><span>Printed : </span><span><xsl:value-of select="EXTRACT/DATE_START"/></span><span> at </span><span><xsl:value-of select="EXTRACT/TIME_START"/></span><span> by </span><span><xsl:value-of select="EXTRACT/PRINTED_BY"/></span></div> 
  <p></p>
  <p></p>
    <TABLE style='font:menu;background:white' BORDER="1" WIDTH="100%">
    <TR>
	<TD bgcolor="lightblue"><B>Phone Number</B></TD>
	<TD bgcolor="lightblue"><B>First Name</B></TD>
	<TD bgcolor="lightblue"><B>Last Name</B></TD>
	<TD bgcolor="lightblue"><B>Employee Number</B></TD>
	</TR> 
    <xsl:for-each select="EXTRACT/EMPLOYEE">
    <xsl:sort select="BUSINESS_PHONE"/>
    <TR>    
    <TD><B><xsl:value-of select="BUSINESS_PHONE"/></B></TD>
    <TD><xsl:value-of select="FIRST_NAME"/></TD>
    <TD><xsl:value-of select="LAST_NAME"/></TD>
    <TD><xsl:value-of select="NUMBER"/></TD>
    </TR>     
    </xsl:for-each>
    </TABLE>
<p></p>
<p></p>
<div>Printed on <xsl:value-of select="EXTRACT/DATE_START"/> at <xsl:value-of select="EXTRACT/TIME_START"/></div>
<div>Details of <xsl:value-of select="EXTRACT/OBJECT_COUNT"/> employees were printed.</div>
<div>*** End of Report ***</div>
</body>
</html> 
</xsl:template>
</xsl:stylesheet>