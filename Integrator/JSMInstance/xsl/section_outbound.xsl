<?xml version="1.0" encoding="utf-8"?>

<!-- Outbound transformation created by LANSA Integrator XML Wizard -->

<xsl:transform version="1.0" exclude-result-prefixes="xalan rdml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdml="http://www.lansa.com/2000/XML/Function" xmlns:xalan="http://xml.apache.org/xalan">

<xsl:output method="xml" omit-xml-declaration="no" indent="yes" xalan:indent-amount="2"/>

<xsl:template match="/">

<COMPANY>

    <xsl:for-each select="/rdml:function/rdml:list/rdml:entry">
        <SECTION>
            <DEPTMENT><xsl:value-of select="rdml:field[@name='DEPTMENT']/@value"/></DEPTMENT>
            <SECTION><xsl:value-of select="rdml:field[@name='SECTION']/@value"/></SECTION>
            <SECPHBUS><xsl:value-of select="rdml:field[@name='SECPHBUS']/@value"/></SECPHBUS>
        </SECTION>
    </xsl:for-each>

</COMPANY>

</xsl:template>

</xsl:transform>
