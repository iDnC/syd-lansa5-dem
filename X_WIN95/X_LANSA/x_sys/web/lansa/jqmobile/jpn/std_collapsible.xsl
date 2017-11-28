<?xml version="1.0" encoding="UTF-8"?><!--(c) 2011, 2014 LANSA--><!--jqMobile Standard Collapsible--><!--$Workfile:: std_collapsible.xsl $--><!--$UTCDate:: 2014-04-02 04:02:49Z $--><!--$Revision:: 11 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><lxml:data><lxml:internal_id id="std_collapsible"><lxml:item>Header</lxml:item><lxml:item>Content</lxml:item></lxml:internal_id></lxml:data><xsl:template name="std_collapsible"><xsl:param name="id"></xsl:param><xsl:param name="collapsed" select="true()"></xsl:param><xsl:param name="contentSwatch" select="''"></xsl:param><xsl:param name="headerLevel" select="3"></xsl:param><xsl:param name="headerSwatch" select="''"></xsl:param><xsl:param name="headerText" select="'Collapsible Block'"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="inset" select="true()"></xsl:param><xsl:param name="expandCueText" select="' click to expand contents'"></xsl:param><xsl:param name="collapseCueText" select="' click to collapse contents'"></xsl:param><xsl:param name="internal_id" select="document('')/*/lxml:data/lxml:internal_id[@id='std_collapsible']"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><div data-role="collapsible" data-enhanced="true"><xsl:attribute name="class"><xsl:text>ui-collapsible ui-collapsible-themed-content</xsl:text><xsl:if test="$inset"> ui-collapsible-inset ui-corner-all</xsl:if><xsl:if test="not($lweb_design_mode)"><xsl:if test="$collapsed"> ui-collapsible-collapsed</xsl:if></xsl:if></xsl:attribute><xsl:if test="$id != ''"><xsl:attribute name="id"><xsl:value-of select="$id"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$collapsed = false()"><xsl:attribute name="data-collapsed">false</xsl:attribute></xsl:if><xsl:if test="$headerSwatch != ''"><xsl:attribute name="data-theme"><xsl:value-of select="$headerSwatch"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$contentSwatch != ''"><xsl:attribute name="data-content-theme"><xsl:value-of select="$contentSwatch"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$inset != true()"><xsl:attribute name="data-inset">false</xsl:attribute></xsl:if><xsl:element name="{concat('h', $headerLevel)}"><xsl:attribute name="class"><xsl:text>ui-collapsible-heading</xsl:text><xsl:if test="not($lweb_design_mode)"><xsl:if test="$collapsed"> ui-collapsible-heading-collapsed</xsl:if></xsl:if></xsl:attribute><a href="#"><xsl:attribute name="class"><xsl:text>ui-collapsible-heading-toggle ui-btn ui-btn-icon-left</xsl:text><xsl:choose><xsl:when test="$collapsed"> ui-icon-plus</xsl:when><xsl:otherwise> ui-icon-minus</xsl:otherwise></xsl:choose><xsl:if test="not($lweb_design_mode)"><xsl:if test="$collapsed"> ui-collapsible-heading-collapsed</xsl:if></xsl:if><xsl:choose><xsl:when test="$headerSwatch != ''"> ui-btn-<xsl:value-of select="$headerSwatch"></xsl:value-of></xsl:when><xsl:otherwise> ui-btn-inherit</xsl:otherwise></xsl:choose></xsl:attribute><xsl:apply-templates select="$internal_id/lxml:item[1]" mode="std_collapsible.private.override"><xsl:with-param name="context" select="."></xsl:with-param><xsl:with-param name="index" select="1"></xsl:with-param><xsl:with-param name="headerText" select="$headerText"></xsl:with-param></xsl:apply-templates><div class="ui-collapsible-heading-status"><xsl:choose><xsl:when test="$collapsed"><xsl:value-of select="$expandCueText"></xsl:value-of></xsl:when><xsl:otherwise><xsl:value-of select="$collapseCueText"></xsl:value-of></xsl:otherwise></xsl:choose><xsl:comment /></div></a></xsl:element><div><xsl:attribute name="class"><xsl:text>ui-collapsible-content</xsl:text><xsl:if test="not($lweb_design_mode)"><xsl:if test="$collapsed"> ui-collapsible-content-collapsed</xsl:if></xsl:if><xsl:choose><xsl:when test="$contentSwatch != ''"> ui-body-<xsl:value-of select="$contentSwatch"></xsl:value-of></xsl:when><xsl:otherwise> ui-body-inherit</xsl:otherwise></xsl:choose></xsl:attribute><xsl:if test="$collapsed"><xsl:attribute name="aria-hidden">true</xsl:attribute></xsl:if><xsl:apply-templates select="$internal_id/lxml:item[2]" mode="std_collapsible.private.override"><xsl:with-param name="context" select="."></xsl:with-param><xsl:with-param name="index" select="2"></xsl:with-param></xsl:apply-templates><xsl:comment /></div></div></xsl:if></xsl:template><xsl:template match="lxml:internal_id[@id='std_collapsible']/lxml:item" mode="std_collapsible.private.override"><xsl:param name="context"></xsl:param><xsl:param name="index"></xsl:param><xsl:param name="headerText"></xsl:param><xsl:choose><xsl:when test="$index=1"><xsl:apply-templates select="$context" mode="_std_collapsible_1.override"><xsl:with-param name="headerText" select="$headerText"></xsl:with-param></xsl:apply-templates></xsl:when><xsl:when test="$index=2"><xsl:apply-templates select="$context" mode="_std_collapsible_2.override"></xsl:apply-templates></xsl:when></xsl:choose></xsl:template><xsl:template match="*" mode="_std_collapsible_1.override"><xsl:param name="headerText"></xsl:param><xsl:value-of select="$headerText"></xsl:value-of></xsl:template><xsl:template match="*" mode="_std_collapsible_2.override">
		Collapsible block content
	</xsl:template></xsl:transform>