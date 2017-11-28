<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
    <p align='center'><b>Departments and Codes</b></p>
    <p></p>
    <TABLE style='font:menu;' BORDER="1" WIDTH="100%" cellpadding="0" cellspacing="0">
    <TR>
	<TD bgcolor="#FF6666"><B>Code</B></TD>
	<TD bgcolor="#FF6666"><B>Description</B></TD>
	</TR> 
    <xsl:for-each select="EXTRACT/DEPARTMENT">
    <xsl:sort select="CODE"/>
    <TR>    
    <TD><xsl:value-of select="CODE"/></TD>
    <TD><xsl:value-of select="DESCRIPTION"/></TD>
    </TR>   
    </xsl:for-each>
    </TABLE>
    <p></p>
    <TABLE style='font:menu;' BORDER='1' cellpadding='0' cellspacing='0' align='center'>
    <TR><TD bgcolor="lightblue" align="center"><B>Codes Alone</B></TD></TR> 
    <xsl:for-each select="EXTRACT/DEPARTMENT">
    <xsl:sort select="CODE"/>
    <TR><TD align="center"><xsl:value-of select="CODE"/></TD></TR>   
    </xsl:for-each>
    </TABLE>
    <p></p>
    <TABLE style='font:menu;' BORDER='1' cellpadding='0' cellspacing='0' align='center'> 
    <TR><TD bgcolor="lightgreen" align="center"><B>Descriptions Alone</B></TD></TR> 
    <xsl:for-each select="EXTRACT/DEPARTMENT">
    <xsl:sort select="DESCRIPTION"/>
    <TR><TD align="center"><xsl:value-of select="DESCRIPTION"/></TD></TR>   
    </xsl:for-each>
    </TABLE>
    <p></p>
    <p></p>
    <div align='center'>*** End of Report ***</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>