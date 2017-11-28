<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" />
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
  <div>Report : Salary Variances Report</div>
  <div><span>Printed : </span><span><xsl:value-of select="EXTRACT/DATE_START"/></span><span> at </span><span><xsl:value-of select="EXTRACT/TIME_START"/></span><span> by </span><span><xsl:value-of select="EXTRACT/PRINTED_BY"/></span></div> 
  <p></p>
  <p></p>
  <xsl:variable name="EmployeeCount" select="count(//EMPLOYEE)"/>
  <xsl:variable name="SalaryTotal"   select="sum(//EMPLOYEE/SALARY)"/>
  <xsl:variable name="SalaryAverage" select="$SalaryTotal div $EmployeeCount"/>
  <p align="center"><BIG>Salary Variance Report</BIG></p>
  <p>The average salary for the selected employees is <xsl:value-of select="format-number($SalaryAverage, '#.00')"/></p>
    <TABLE align="center" style='font:menu' border="1">
    <TR>
	<TD><U><B>Name</B></U></TD>
	<TD><U><B>Current Salary</B></U></TD>
	<TD><U><B>Variance from Average</B></U></TD>
	</TR> 
    <xsl:for-each select="EXTRACT/EMPLOYEE">
    <TR>    
    <TD><xsl:value-of select="FULL_NAME"/></TD>
    <TD align="right"><xsl:value-of select="format-number(SALARY, '#.00')"/></TD>
    <TD align="right"><xsl:value-of select="format-number(SALARY - $SalaryAverage, '#.00')"/></TD>
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