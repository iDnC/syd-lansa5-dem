<?xml version="1.0" encoding="UTF-8"?><!--(c) 2014, 2017 LANSA--><!--jqMobile Progress bar--><!--$Workfile:: std_progressbar.xsl $--><!--$UTCDate:: 2017-01-20 10:01:47Z $--><!--$Revision:: 8 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd xslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xslt="http://www.lansa.com/2002/XSL/Transform-Alias" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:namespace-alias stylesheet-prefix="xslt" result-prefix="xsl"></xsl:namespace-alias><xsl:template name="std_progressbar"><xsl:param name="name" select="generate-id()"></xsl:param><xsl:param name="id" select="concat($lweb_WRName,'_',$name)"></xsl:param><xsl:param name="value" select="0"></xsl:param><xsl:param name="max" select="100"></xsl:param><xsl:param name="caption" select="'auto'"></xsl:param><xsl:param name="transitory" select="false()"></xsl:param><xsl:param name="overlay" select="false()"></xsl:param><xsl:param name="delayClose" select="500"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="swatch" select="''"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><xsl:if test="$overlay and $transitory"><xsl:if test="not($lweb_design_mode)"><div id="_{$id}_OVERLAY" class="lstd-progressbar-overlay"><xsl:comment /></div></xsl:if></xsl:if><div id="{$id}" class="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all lstd-progressbar"><xsl:if test="$swatch != ''"><xsl:attribute name="class"><xsl:text>ui-slider-track ui-shadow-inset ui-bar-</xsl:text><xsl:value-of select="$swatch"></xsl:value-of><xsl:text> ui-corner-all lstd-progressbar</xsl:text></xsl:attribute></xsl:if><div class="ui-slider-bg ui-btn-active lstd-progressbar-content" data-style="display:block; width:0%;"><xsl:comment /></div><xsl:comment /></div><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[</xsl:text><xsl:text></xsl:text>
	Lstd.Weblets.stdProgressBar.init("<xsl:value-of select="$id"></xsl:value-of>", {<xsl:text></xsl:text><xsl:text></xsl:text>value: <xsl:value-of select="$value"></xsl:value-of>, max: <xsl:value-of select="$max"></xsl:value-of><xsl:text></xsl:text><xsl:if test="$transitory">, transitory: true, overlay: <xsl:value-of select="$overlay"></xsl:value-of>, delayClose: <xsl:value-of select="$delayClose"></xsl:value-of></xsl:if><xsl:if test="$caption != 'auto'">, caption: "<xsl:value-of select="$caption"></xsl:value-of>"</xsl:if>});<xsl:text></xsl:text><xsl:text disable-output-escaping="yes">//]]&gt;</xsl:text></script></xsl:if></xsl:template></xsl:transform>