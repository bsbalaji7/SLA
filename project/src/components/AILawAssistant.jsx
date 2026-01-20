import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Lightbulb } from 'lucide-react';
import styles from './AILawAssistant.module.css';

export default function AILawAssistant({ onBack }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your AI Legal Assistant. I can help you with general legal information, explain laws, clarify legal concepts, and guide you through common legal procedures. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    'What are my consumer rights?',
    'How do I file a complaint?',
    'Explain property laws in simple terms',
    'What is the legal process for divorce?',
    'How do labor laws protect employees?',
    'What should I do if I\'m wrongly accused?'
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: generateAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setLoading(false);
    }, 800);
  };

  const generateAIResponse = (userInput) => {
    const lower = userInput.toLowerCase();

    if (lower.includes('consumer') || lower.includes('consumer rights')) {
      return 'Consumer Rights include:\n\n1. Right to Safety: Protection from hazardous products\n2. Right to Information: Clear labeling and accurate information\n3. Right to Choose: Freedom to select from alternatives\n4. Right to be Heard: Complaint resolution\n5. Right to Compensation: For defective products or services\n\nYou can file complaints with Consumer Protection Authorities or take legal action for damages.';
    }

    if (lower.includes('complaint') || lower.includes('file')) {
      return 'To file a complaint:\n\n1. Document the issue with dates and details\n2. Gather supporting evidence (receipts, photos, etc.)\n3. Try informal resolution first\n4. File formally with appropriate authority:\n   - Consumer Commission (product/service issues)\n   - Police (criminal matters)\n   - Labor Department (employment issues)\n5. Seek legal representation if needed\n\nMany legal aid services provide free assistance.';
    }

    if (lower.includes('property') || lower.includes('property law')) {
      return 'Property Laws cover:\n\n1. Ownership Rights: Right to buy, sell, lease, or gift property\n2. Succession: Laws governing property after death\n3. Disputes: Resolution of boundary and ownership disputes\n4. Registration: Legal documentation of property ownership\n5. Protection: Laws against illegal seizure or trespass\n\nAlways ensure property transactions are documented and registered properly.';
    }

    if (lower.includes('divorce') || lower.includes('marriage')) {
      return 'Divorce Process typically involves:\n\n1. Grounds for Divorce: Mutual consent or fault-based\n2. Filing: Petition filed in Family Court\n3. Mediation: Attempts at reconciliation\n4. Proceedings: Court hearings and evidence\n5. Settlement: Division of assets and custody arrangements\n\nIt\'s advisable to consult a family law attorney for guidance through this process.';
    }

    if (lower.includes('labor') || lower.includes('employee')) {
      return 'Employee Rights include:\n\n1. Fair Wages: Minimum wage and timely payment\n2. Safe Workplace: Proper working conditions\n3. Working Hours: Limits on work hours\n4. Leave: Paid and unpaid leave entitlements\n5. Protection: Against discrimination and harassment\n6. Collective Bargaining: Right to form/join unions\n\nEmployers cannot violate these rights. Report violations to labor authorities.';
    }

    if (lower.includes('accused') || lower.includes('criminal')) {
      return 'If Wrongly Accused:\n\n1. Right to Silence: You can refuse to answer questions\n2. Legal Representation: Right to a lawyer\n3. Fair Trial: Right to know charges and present defense\n4. Presumption of Innocence: Burden of proof on prosecution\n5. Evidence Examination: Can challenge prosecution evidence\n\nContact a criminal law attorney immediately. Legal aid is available if you cannot afford one.';
    }

    return 'Based on your question, I recommend:\n\n1. Consult with a qualified lawyer for specific legal advice\n2. Refer to relevant laws and regulations\n3. Contact appropriate authorities for your issue\n4. Keep all documentation organized\n5. Seek legal aid if you cannot afford consultation\n\nWould you like more information on a specific legal topic?';
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className={styles.assistantContainer}>
      <div className={styles.assistantHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <div className={styles.headerTitle}>
          <MessageCircle className={styles.headerIcon} />
          <div>
            <h1>AI Legal Assistant</h1>
            <p>24/7 Legal Guidance and Information</p>
          </div>
        </div>
      </div>

      <div className={styles.assistantContent}>
        {messages.length === 1 && (
          <div className={styles.suggestionsSection}>
            <div className={styles.suggestionsHeader}>
              <Lightbulb className={styles.suggestionsIcon} />
              <h3>Popular Questions</h3>
            </div>
            <div className={styles.suggestionsGrid}>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className={styles.suggestionButton}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.messagesContainer}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.messageWrapper} ${styles[message.type]}`}
            >
              <div className={styles.message}>
                <p className={styles.messageText}>{message.text}</p>
                <span className={styles.timestamp}>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}

          {loading && (
            <div className={`${styles.messageWrapper} ${styles.bot}`}>
              <div className={styles.message}>
                <div className={styles.loadingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !loading) {
                  handleSendMessage();
                }
              }}
              placeholder="Ask your legal question..."
              className={styles.input}
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              disabled={loading || !input.trim()}
              className={styles.sendButton}
            >
              <Send className={styles.sendIcon} />
            </button>
          </div>
          <p className={styles.disclaimer}>
            Note: This AI provides general legal information. For specific legal advice, please consult a qualified lawyer.
          </p>
        </div>
      </div>
    </div>
  );
}