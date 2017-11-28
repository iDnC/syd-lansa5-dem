<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body style='font:menu;background:buttonface;margin:8;' oncontextmenu='return false;'>
        <div>Report : Full Employee Detail Report</div>
        <div>
          <span>Printed : </span>
          <span>
            <xsl:value-of select="EXTRACT/DATE_START"/>
          </span>
          <span> at </span>
          <span>
            <xsl:value-of select="EXTRACT/TIME_START"/>
          </span>
          <span> by </span>
          <span>
            <xsl:value-of select="EXTRACT/PRINTED_BY"/>
          </span>
        </div>
        <p></p>
        <p></p>
        <TABLE style='font:menu' BORDER="0" WIDTH="100%" HEIGHT="100%">
          <xsl:for-each select="EXTRACT/EMPLOYEE">
            <TR>
              <TD bgcolor="lightblue">
                <B>Full Name</B>
              </TD>
              <TD bgcolor="lightblue">
                <BIG>
                  <B>
                    <xsl:value-of select="FULL_NAME"/>
                  </B>
                </BIG>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Number</TD>
              <TD>
                <xsl:value-of select="NUMBER"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Address</TD>
              <TD>
                <xsl:value-of select="ADDRESS_LINE_1"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3"> </TD>
              <TD>
                <xsl:value-of select="ADDRESS_LINE_2"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3"> </TD>
              <TD>
                <xsl:value-of select="ADDRESS_LINE_3"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Zip Code</TD>
              <TD>
                <xsl:value-of select="ZIPCODE"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Home Phone</TD>
              <TD>
                <xsl:value-of select="HOME_PHONE"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Business Phone</TD>
              <TD>
                <xsl:value-of select="BUSINESS_PHONE"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Department</TD>
              <TD>
                <xsl:value-of select="DEPARTMENT_DESCRIPTION"/>
              </TD>
            </TR>
            <TR>
              <TD bgcolor="#d3d3d3">Salary</TD>
              <TD>
                <xsl:value-of select="SALARY"/>
              </TD>
            </TR>
          </xsl:for-each>
        </TABLE>
        <p></p>
        <p></p>
        <div>
          Printed on <xsl:value-of select="EXTRACT/DATE_START"/> at <xsl:value-of select="EXTRACT/TIME_START"/>
        </div>
        <div>
          Details of <xsl:value-of select="EXTRACT/OBJECT_COUNT"/> employees were printed.
        </div>
        <div>*** End of Report ***</div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>