<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'> 
  <div>Report : Organization in Code Order</div>
  <div><span>Printed : </span><span><xsl:value-of select="EXTRACT/DATE_START"/></span><span> at </span><span><xsl:value-of select="EXTRACT/TIME_START"/></span><span> by </span><span><xsl:value-of select="EXTRACT/PRINTED_BY"/></span></div> 
  <p></p>
  <p></p>
  <table style='font:menu;'>
  <tr><th align='left'><u>Code</u></th><th align='left'><u>Description</u></th></tr> 
  <xsl:for-each select="EXTRACT/DEPARTMENT">
  <xsl:sort select="CODE"/>
    <tr><td align='left'><xsl:value-of select="CODE"/></td><td align='left'><xsl:value-of select="DESCRIPTION"/></td></tr>   
  </xsl:for-each>
  </table> 
  <p></p>
  <p></p>
  <div>*** End of Report ***</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>  