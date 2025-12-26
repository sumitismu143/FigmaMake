import { useState } from 'react';
import { KPIRibbon } from './components/KPIRibbon';
import { SpendAnalytics } from './components/SpendAnalytics';
import { SavingsEngine } from './components/SavingsEngine';
import { SupplierPerformance } from './components/SupplierPerformance';
import { ReshoringStrategy } from './components/ReshoringStrategy';
import { StrategicValue } from './components/StrategicValue';
import { DetailTabs } from './components/DetailTabs';
import { FilterPanel } from './components/FilterPanel';
import { GenieAssistant } from './components/GenieAssistant';
import { LayoutDashboard, TrendingUp, Shield, Globe, Target, FileText, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState({
    supplier: 'All',
    category: 'All',
    region: 'All',
    riskLevel: 'All',
    criticality: 'All'
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'savings', label: 'Savings Engine', icon: TrendingUp },
    { id: 'supplier', label: 'Supplier Performance', icon: Shield },
    { id: 'reshoring', label: 'Reshoring Strategy', icon: Globe },
    { id: 'strategic', label: 'Strategic Value', icon: Target },
    { id: 'details', label: 'Deep Dive', icon: FileText },
    { id: 'genie', label: 'Genie Assistant', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 shadow-lg">
        <h1 className="text-3xl mb-2">High-Tech Strategic Sourcing & Value Realization Dashboard</h1>
        <p className="text-blue-100">HP Enterprise Procurement Intelligence</p>
      </div>

      {/* KPI Ribbon - Always Visible */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <KPIRibbon filters={filters} />
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 px-8">
        <div className="flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Panel */}
      <div className="px-8 py-4 bg-slate-100 border-b border-slate-200">
        <FilterPanel filters={filters} setFilters={setFilters} />
      </div>

      {/* Main Content */}
      <div className="px-8 py-6">
        {activeTab === 'overview' && <SpendAnalytics filters={filters} />}
        {activeTab === 'savings' && <SavingsEngine filters={filters} />}
        {activeTab === 'supplier' && <SupplierPerformance filters={filters} />}
        {activeTab === 'reshoring' && <ReshoringStrategy filters={filters} />}
        {activeTab === 'strategic' && <StrategicValue filters={filters} />}
        {activeTab === 'details' && <DetailTabs filters={filters} />}
        {activeTab === 'genie' && <GenieAssistant filters={filters} />}
      </div>
    </div>
  );
}