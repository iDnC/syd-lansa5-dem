<?xml version="1.0" encoding="UTF-8"?><!--(c) 2003, 2017 LANSA--><!--XHTML Standard char visualization--><!--$Workfile:: std_char.xsl $--><!--$UTCDate:: 2017-01-10 21:50:01Z $--><!--$Revision:: 17 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd xslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xslt="http://www.lansa.com/2002/XSL/Transform-Alias" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_input.xsl"></xsl:import><xsl:import href="std_textarea.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_keys.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:namespace-alias stylesheet-prefix="xslt" result-prefix="xsl"></xsl:namespace-alias><xsl:template name="std_char"><xsl:param name="name"></xsl:param><xsl:param name="value"></xsl:param><xsl:param name="display_mode"></xsl:param><xsl:param name="maxlength"></xsl:param><xsl:param name="display_length"></xsl:param><xsl:param name="type" select="'text'"></xsl:param><xsl:param name="keyboard_shift" select="' '"></xsl:param><xsl:param name="hide_if" select="false()"></xsl:param><xsl:param name="class" select="'text'"></xsl:param><xsl:param name="tab_index"></xsl:param><xsl:param name="title"></xsl:param><xsl:param name="word_wrap"></xsl:param><xsl:param name="read_only" select="false()"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="pos_absolute"></xsl:param><xsl:param name="width"></xsl:param><xsl:param name="height"></xsl:param><xsl:if test="not($hide_if) or $lweb_design_mode"><span class="ui-widget"><xsl:variable name="style"><xsl:if test="$pos_absolute or $height or $width"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_char.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute"></xsl:with-param><xsl:with-param name="height" select="$height"></xsl:with-param><xsl:with-param name="width" select="$width"></xsl:with-param></xsl:call-template></xsl:if></xsl:variable><xsl:choose><xsl:when test="($display_mode='' or $display_mode='input') and $type='memo'"><xsl:element name="textarea"><xsl:attribute name="class"><xsl:text>std_weblet</xsl:text><xsl:choose><xsl:when test="$class != ''"><xsl:value-of select="$class"></xsl:value-of></xsl:when><xsl:otherwise> std_textarea</xsl:otherwise></xsl:choose></xsl:attribute><xsl:attribute name="data-weblet">std_char</xsl:attribute><xsl:attribute name="name"><xsl:value-of select="$name"></xsl:value-of></xsl:attribute><xsl:attribute name="cols"><xsl:value-of select="$display_length"></xsl:value-of></xsl:attribute><xsl:if test="$style != ''"><xsl:attribute name="data-style"><xsl:value-of select="$style"></xsl:value-of></xsl:attribute></xsl:if><xsl:attribute name="rows"><xsl:choose><xsl:when test="$display_length!='' and $display_length!=0 and $maxlength!='' and $maxlength!=0"><xsl:variable name="num_rows" select="round($maxlength div $display_length) + 1"></xsl:variable><xsl:choose><xsl:when test="$num_rows &lt; 11"><xsl:value-of select="$num_rows"></xsl:value-of></xsl:when><xsl:otherwise>10</xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise><xsl:text>10</xsl:text></xsl:otherwise></xsl:choose></xsl:attribute><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$title != ''"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$word_wrap != ''"><xsl:attribute name="wrap"><xsl:value-of select="$word_wrap"></xsl:value-of></xsl:attribute></xsl:if><xsl:attribute name="data-keyboard-shift"><xsl:value-of select="$keyboard_shift"></xsl:value-of></xsl:attribute><xsl:attribute name="data-maxlength"><xsl:value-of select="$maxlength"></xsl:value-of></xsl:attribute><xsl:if test="boolean($read_only)"><xsl:attribute name="readonly">readonly</xsl:attribute></xsl:if><xsl:if test="boolean($disabled)"><xsl:attribute name="disabled">disabled</xsl:attribute></xsl:if><xsl:value-of select="$value"></xsl:value-of><xsl:if test="$value = ''"><xsl:text disable-output-escaping="yes">&amp;#xA;</xsl:text></xsl:if></xsl:element></xsl:when><xsl:when test="$display_mode!='output'"><input name="{$name}" id="{$name}" class="std_weblet text" data-weblet="std_char" data-keyboard-shift="{$keyboard_shift}" value="{$value}" size="{$display_length}" maxlength="{$maxlength}"><xsl:if test="$class != 'text'"><xsl:attribute name="class">std_weblet <xsl:value-of select="$class"></xsl:value-of></xsl:attribute></xsl:if><xsl:attribute name="type"><xsl:choose><xsl:when test="$display_mode='hidden'"><xsl:text>hidden</xsl:text></xsl:when><xsl:otherwise><xsl:value-of select="$type"></xsl:value-of></xsl:otherwise></xsl:choose></xsl:attribute><xsl:if test="$style != ''"><xsl:attribute name="data-style"><xsl:value-of select="$style"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$title != ''"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="boolean($read_only)"><xsl:attribute name="readonly">readonly</xsl:attribute></xsl:if><xsl:if test="boolean($disabled)"><xsl:attribute name="disabled">disabled</xsl:attribute></xsl:if></input></xsl:when><xsl:otherwise><span><xsl:if test="$title != ''"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$class!=''"><xsl:attribute name="class"><xsl:value-of select="$class"></xsl:value-of></xsl:attribute></xsl:if><xsl:value-of select="$value"></xsl:value-of><xsl:comment /></span></xsl:otherwise></xsl:choose><xsl:comment /></span></xsl:if></xsl:template></xsl:transform>