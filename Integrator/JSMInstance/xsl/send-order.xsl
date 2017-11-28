<?xml version="1.0" encoding="UTF-8"?>

<!-- Outbound transformation created by LANSA Integrator Visual XML Wizard -->

<xsl:transform version="1.0" exclude-result-prefixes="xalan rdml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdml="http://www.lansa.com/2000/XML/Function" xmlns:xalan="http://xml.apache.org/xalan">

<xsl:output method="xml" omit-xml-declaration="no" indent="yes" xalan:indent-amount="2"/>

<xsl:template match="/">

<Orders>
    <SalesOrder SONumber="{/rdml:function/rdml:fields/rdml:field[@name='ORDER']/@value}">
        <Customer CustNumber="{/rdml:function/rdml:fields/rdml:field[@name='CUSTNUM']/@value}">
            <CustName><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='NAME']/@value"/></CustName>
            <Street><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='STREET']/@value"/></Street>
            <City><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='CITY']/@value"/></City>
            <State><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='STATE']/@value"/></State>
            <PostCode><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='ZIP']/@value"/></PostCode>
        </Customer>
        <OrderDate><xsl:value-of select="/rdml:function/rdml:fields/rdml:field[@name='ORDDTE']/@value"/></OrderDate>

        <xsl:for-each select="/rdml:function/rdml:list/rdml:entry">
            <Line LineNumber="{rdml:field[@name='LINENUM']/@value}">
                <Part PartNumber="{rdml:field[@name='PARTNUM']/@value}">
                    <Description><xsl:value-of select="rdml:field[@name='PARTDSC']/@value"/></Description>
                    <Price><xsl:value-of select="rdml:field[@name='PARTAMT']/@value"/></Price>
                </Part>
                <Quantity><xsl:value-of select="rdml:field[@name='PARTQTY']/@value"/></Quantity>
            </Line>
        </xsl:for-each>

    </SalesOrder>
</Orders>

</xsl:template>

</xsl:transform>
