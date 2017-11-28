<?xml version="1.0" encoding="UTF-8"?><!--(c) 2011, 2014 LANSA--><!--jqMobile HTML list item--><!--$UTCDate:: 2014-03-12 03:46:11Z $--><!--$Revision:: 11 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd tsml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:tsml="http://www.lansa.com/2002/XML/Generation-Metadata" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="no"></xsl:output><lxml:data><lxml:internal_id id="std_html_li"></lxml:internal_id></lxml:data><xsl:template name="std_html_li"><xsl:param name="id"></xsl:param><xsl:param name="class" select="''"></xsl:param><xsl:param name="filterText" select="''"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="role" select="''"></xsl:param><xsl:param name="swatch" select="''"></xsl:param><xsl:param name="internal_id" select="document('')/*/lxml:data/lxml:internal_id[@id='std_html_li']"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><li><xsl:if test="$id != ''"><xsl:attribute name="id"><xsl:value-of select="$id"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$class != ''"><xsl:attribute name="class"><xsl:value-of select="$class"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$role != ''"><xsl:attribute name="data-role"><xsl:value-of select="$role"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$swatch!= ''"><xsl:attribute name="data-theme"><xsl:value-of select="$swatch"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$filterText != ''"><xsl:attribute name="data-filtertext"><xsl:value-of select="$filterText"></xsl:value-of></xsl:attribute></xsl:if><xsl:apply-templates select="$internal_id" mode="std_html_li.private.override"><xsl:with-param name="context" select="."></xsl:with-param><xsl:with-param name="index" select="1"></xsl:with-param></xsl:apply-templates></li></xsl:if></xsl:template><xsl:template match="lxml:internal_id[@id='std_html_li']" mode="std_html_li.private.override"><xsl:param name="context"></xsl:param><xsl:param name="index"></xsl:param><xsl:choose><xsl:when test="$index=1"><xsl:apply-templates select="$context" mode="_std_html_li_content_1.override"></xsl:apply-templates></xsl:when></xsl:choose></xsl:template><xsl:template match="*" mode="_std_html_li_content_1.override">
		List Item
	</xsl:template></xsl:transform>