import React, { useState } from 'react';
import { Info } from 'lucide-react';

const TwoWireProblem = () => {
  const [activeFrame, setActiveFrame] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const frames = {
    realist: {
      title: "Frame A: Field Realist",
      wire1: "Gravitational wave (pre-existing field excitation)",
      wire2: "Measurement apparatus (reveals existing properties)",
      spark: "Graviton (detected particle, was always there)",
      gap: "Technical challenge (need better sensitivity)",
      color: "#3b82f6"
    },
    relational: {
      title: "Frame B: Relational/Process",
      wire1: "Signal potential (undefined until measured)",
      wire2: "Observer reference frame (co-creates outcome)",
      spark: "Interaction record (emerges at interface)",
      gap: "Unacknowledged observer-dependence",
      color: "#8b5cf6"
    },
    instrumental: {
      title: "Frame C: Pragmatic/Instrumental",
      wire1: "Input energy (calculational tool)",
      wire2: "Detection protocol (operational definition)",
      spark: "Measurement result (data point, no ontology)",
      gap: "Optimization problem (improve signal/noise)",
      color: "#10b981"
    },
    institutional: {
      title: "Frame D: Institutional/Sociological",
      wire1: "Theoretical promise (funding justification)",
      wire2: "Experimental practice (career structure)",
      spark: "Publication (academic capital)",
      gap: "Mystery maintenance (sustains research programs)",
      color: "#f59e0b"
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            The Two-Wire Problem
          </h2>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {showInfo && (
          <div className="mb-6 p-4 bg-blue-50 rounded border-l-4 border-blue-500 text-sm">
            <p className="mb-2">
              <strong>Frame-Neutral Exploration:</strong> Each interpretation below describes the same experimental structure differently. None is presented as "correct"—each reveals and obscures different aspects.
            </p>
            <p className="text-gray-700">
              Click each frame to see how it maps the circuit elements. Notice what questions each frame makes natural vs. unaskable.
            </p>
          </div>
        )}

        {/* Circuit Diagram */}
        <div className="relative h-64 mb-8 bg-gray-100 rounded-lg p-8">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Wire 1 */}
            <line
              x1="50" y1="100" x2="150" y2="100"
              stroke={activeFrame ? frames[activeFrame].color : "#6b7280"}
              strokeWidth="4"
            />
            <circle cx="50" cy="100" r="8" fill={activeFrame ? frames[activeFrame].color : "#6b7280"} />
            <text x="50" y="85" textAnchor="middle" className="text-xs font-bold" fill="#374151">
              Wire 1
            </text>

            {/* Gap (Air Gap) */}
            <line
              x1="150" y1="100" x2="155" y2="95"
              stroke={activeFrame ? frames[activeFrame].color : "#6b7280"}
              strokeWidth="2"
            />
            <line
              x1="245" y1="95" x2="250" y2="100"
              stroke={activeFrame ? frames[activeFrame].color : "#6b7280"}
              strokeWidth="2"
            />
            
            {/* Spark visualization */}
            {activeFrame && (
              <>
                <circle cx="200" cy="95" r="3" fill={frames[activeFrame].color} opacity="0.6">
                  <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="75" textAnchor="middle" className="text-xs font-bold" fill={frames[activeFrame].color}>
                  Snap Moment
                </text>
              </>
            )}

            <text x="200" y="120" textAnchor="middle" className="text-xs italic" fill="#6b7280">
              {activeFrame ? "Contact Point" : "The Gap"}
            </text>

            {/* Wire 2 */}
            <line
              x1="250" y1="100" x2="350" y2="100"
              stroke={activeFrame ? frames[activeFrame].color : "#6b7280"}
              strokeWidth="4"
            />
            <circle cx="350" cy="100" r="8" fill={activeFrame ? frames[activeFrame].color : "#6b7280"} />
            <text x="350" y="85" textAnchor="middle" className="text-xs font-bold" fill="#374151">
              Wire 2
            </text>

            {/* Bulb */}
            <circle
              cx="200" cy="150"
              r="20"
              fill={activeFrame ? frames[activeFrame].color : "#d1d5db"}
              opacity={activeFrame ? "0.3" : "0.1"}
            />
            <line x1="150" y1="100" x2="200" y2="150" stroke={activeFrame ? frames[activeFrame].color : "#6b7280"} strokeWidth="2" />
            <line x1="250" y1="100" x2="200" y2="150" stroke={activeFrame ? frames[activeFrame].color : "#6b7280"} strokeWidth="2" />
            <text x="200" y="190" textAnchor="middle" className="text-xs" fill="#374151">
              {activeFrame ? "Illuminated" : "Discovery"}
            </text>
          </svg>
        </div>

        {/* Frame Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {Object.entries(frames).map(([key, frame]) => (
            <button
              key={key}
              onClick={() => setActiveFrame(activeFrame === key ? null : key)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                activeFrame === key
                  ? 'border-current shadow-lg'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{
                borderColor: activeFrame === key ? frame.color : undefined,
                backgroundColor: activeFrame === key ? `${frame.color}10` : 'white'
              }}
            >
              <div className="font-bold mb-2" style={{ color: frame.color }}>
                {frame.title}
              </div>
              {activeFrame === key && (
                <div className="text-sm text-gray-700 space-y-1">
                  <div><strong>Wire 1:</strong> {frame.wire1}</div>
                  <div><strong>Wire 2:</strong> {frame.wire2}</div>
                  <div><strong>Spark:</strong> {frame.spark}</div>
                  <div><strong>Gap:</strong> {frame.gap}</div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Frame Comparison */}
        {activeFrame && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold mb-3 text-gray-800">What This Frame Makes Visible</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {activeFrame === 'realist' && (
                <>
                  <p><strong>Reveals:</strong> Clear predictions, experimental falsifiability, integration with Standard Model</p>
                  <p><strong>Obscures:</strong> Observer-frame dependence, measurement-outcome co-creation, why basis choice matters</p>
                  <p><strong>Natural questions:</strong> "What is the graviton's mass?" "How many were detected?"</p>
                  <p><strong>Unaskable questions:</strong> "Is the graviton relative to my reference frame?"</p>
                </>
              )}
              {activeFrame === 'relational' && (
                <>
                  <p><strong>Reveals:</strong> Measurement as interface-closure, observer-relativity of outcomes, basis-dependence</p>
                  <p><strong>Obscures:</strong> Cross-observer consistency, conservation laws, why predictions work at all</p>
                  <p><strong>Natural questions:</strong> "How does my frame shape what I see?" "What's lost in closure?"</p>
                  <p><strong>Unaskable questions:</strong> "What was the graviton doing before measurement?"</p>
                </>
              )}
              {activeFrame === 'instrumental' && (
                <>
                  <p><strong>Reveals:</strong> Operational clarity, predictive success without ontology, practical utility</p>
                  <p><strong>Obscures:</strong> Why the formalism works, what's "really happening," deeper unification prospects</p>
                  <p><strong>Natural questions:</strong> "Does this calculation match the data?" "Can we improve precision?"</p>
                  <p><strong>Unaskable questions:</strong> "What is the graviton, fundamentally?"</p>
                </>
              )}
              {activeFrame === 'institutional' && (
                <>
                  <p><strong>Reveals:</strong> Social/economic constraints on inquiry, path-dependence, career incentives</p>
                  <p><strong>Obscures:</strong> Genuine intellectual disagreement, progress within paradigms, honest confusion</p>
                  <p><strong>Natural questions:</strong> "Who benefits from this framing?" "What gets funded?"</p>
                  <p><strong>Unaskable questions:</strong> "Is this interpretation physically correct?"</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Meta-Commentary */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-bold mb-2 text-purple-900">The Frame-Neutral Position</h3>
          <p className="text-sm text-purple-800">
            The "Two-Wire Problem" exists in all frames. Each describes the same experimental structure:
            signal + reference → measurement outcome. The dispute is about <em>what that structure means</em>.
          </p>
          <p className="text-sm text-purple-800 mt-2">
            Frame A says Wire 2 reveals pre-existing properties. Frame B says Wire 2 co-creates them.
            Frame C says the question doesn't matter for predictions. Frame D says the question serves
            institutional functions.
          </p>
          <p className="text-sm text-purple-800 mt-2 font-semibold">
            None is presented as "correct." This visualization holds the interpretive space open.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoWireProblem;