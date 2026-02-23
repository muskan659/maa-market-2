import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForexHero from "@/components/forex/ForexHero";
import PriceTicker from "@/components/forex/PriceTicker";
import TradeMarkets from "@/components/forex/TradeMarkets";
import MarketTable from "@/components/forex/MarketTable";
import WhatIsForex from "@/components/forex/WhatIsForex";
import ForexInsights from "@/components/forex/ForexInsights";
import AssetClasses from "@/components/forex/AssetClasses";
import MetaTraderFeatures from "@/components/forex/MetaTraderFeatures";
import TradingPlatforms from "@/components/forex/TradingPlatforms";
import TraderTabs from "@/components/forex/TraderTabs";
import AccountTypes from "@/components/forex/AccountTypes";
import Navbar2 from '@/components/Nsvbar2';
import TradeWithoutLimits from '@/components/TradeWithoutLimits';

export default function ForexPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar2 />
            <ForexHero />
            <PriceTicker />
            <TradeMarkets />
            <MarketTable />
            <WhatIsForex />

            <MetaTraderFeatures />
            <TradeWithoutLimits />
            {/* <TradingPlatforms /> */}
            <TraderTabs />
            <AccountTypes />
            <ForexInsights />
            <AssetClasses />
            <Footer />
        </main>
    );
}
