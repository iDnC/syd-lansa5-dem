<?xml version="1.0" encoding="UTF-8"?>

<!-- Inbound transformation created by LANSA Integrator Visual XML Wizard -->

<xsl:transform version="1.0" exclude-result-prefixes="xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdml="http://www.lansa.com/2000/XML/Function" xmlns:xalan="http://xml.apache.org/xalan">

<xsl:output method="xml" indent="yes" xalan:indent-amount="2"/>

<xsl:template match="/">

<rdml:function>

<rdml:fields>
    <xsl:call-template name="function-level"/>
</rdml:fields>

<rdml:list>
    <xsl:for-each select="/Orders/SalesOrder/Line">
        <xsl:call-template name="list-level-0"/>
    </xsl:for-each>
</rdml:list>

</rdml:function>

</xsl:template>

<xsl:template name="function-level">    <!-- /Orders -->
    <rdml:field name="ORDER" longName="SONumber" value="{/Orders/SalesOrder/@SONumber}" />
    <rdml:field name="CUSTNUM" longName="CustNumber" value="{/Orders/SalesOrder/Customer/@CustNumber}" />
    <rdml:field name="NAME" longName="CustName" value="{/Orders/SalesOrder/Customer/CustName}" />
    <rdml:field name="STREET" longName="Street" value="{/Orders/SalesOrder/Customer/Street}" />
    <rdml:field name="CITY" longName="City" value="{/Orders/SalesOrder/Customer/City}" />
    <rdml:field name="STATE" longName="State" value="{/Orders/SalesOrder/Customer/State}" />
    <rdml:field name="ZIP" longName="PostCode" value="{/Orders/SalesOrder/Customer/PostCode}" />
    <rdml:field name="ORDDTE" longName="OrderDate" value="{/Orders/SalesOrder/OrderDate}" />
</xsl:template>

<xsl:template name="list-level-0">    <!-- /Orders/SalesOrder/Line -->

    <rdml:entry>
        <rdml:field name="LINENUM" longName="LineNumber" value="{@LineNumber}" />
        <rdml:field name="PARTNUM" longName="PartNumber" value="{Part/@PartNumber}" />
        <rdml:field name="PARTDSC" longName="Description" value="{Part/Description}" />
        <rdml:field name="PARTAMT" longName="Price" value="{Part/Price}" />
        <rdml:field name="PARTQTY" longName="Quantity" value="{Quantity}" />
    </rdml:entry>

</xsl:template>

</xsl:transform>
