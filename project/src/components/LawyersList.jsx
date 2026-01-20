import { Star, MapPin, Phone, Mail, Briefcase } from 'lucide-react';
import styles from './LawyersList.module.css';

export default function LawyersList({ onBack }) {
  const lawyers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      specialization: 'Criminal Law',
      experience: '12 years',
      rating: 4.8,
      reviews: 142,
      location: 'Delhi',
      phone: '+91-98765-43210',
      email: 'rajesh.kumar@law.com',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialized in criminal defense with proven track record in high-profile cases'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      specialization: 'Family Law',
      experience: '9 years',
      rating: 4.9,
      reviews: 156,
      location: 'Mumbai',
      phone: '+91-98765-43211',
      email: 'priya.sharma@law.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in family matters, divorce settlements, and custody cases'
    },
    {
      id: 3,
      name: 'Amit Patel',
      specialization: 'Corporate Law',
      experience: '15 years',
      rating: 4.7,
      reviews: 189,
      location: 'Bangalore',
      phone: '+91-98765-43212',
      email: 'amit.patel@law.com',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in mergers, acquisitions, and corporate compliance matters'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      specialization: 'Labor Law',
      experience: '11 years',
      rating: 4.6,
      reviews: 128,
      location: 'Pune',
      phone: '+91-98765-43213',
      email: 'neha.gupta@law.com',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced in employee rights, workplace disputes, and labor negotiations'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      specialization: 'Property & Real Estate',
      experience: '13 years',
      rating: 4.8,
      reviews: 167,
      location: 'Hyderabad',
      phone: '+91-98765-43214',
      email: 'vikram.singh@law.com',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in property disputes, real estate transactions, and land laws'
    }
  ];

  return (
    <div className={styles.lawyersContainer}>
      <div className={styles.lawyersHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <h1>Find Your Lawyer</h1>
          <p>Connect with experienced legal professionals</p>
        </div>
      </div>

      <div className={styles.lawyersContent}>
        <div className={styles.filterSection}>
          <input
            type="text"
            placeholder="Search lawyers by name or specialization..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.lawyersGrid}>
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className={styles.lawyerCard}>
              <div className={styles.cardHeader}>
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className={styles.lawyerImage}
                />
                <div className={styles.lawyerBadge}>
                  <Briefcase className={styles.badgeIcon} />
                  {lawyer.specialization}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.lawyerName}>{lawyer.name}</h3>

                <div className={styles.ratingBox}>
                  <div className={styles.stars}>
                    <Star className={styles.filledStar} />
                    <span className={styles.rating}>{lawyer.rating}</span>
                  </div>
                  <span className={styles.reviews}>({lawyer.reviews} reviews)</span>
                </div>

                <p className={styles.bio}>{lawyer.bio}</p>

                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <Briefcase className={styles.detailIcon} />
                    <span>{lawyer.experience}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <MapPin className={styles.detailIcon} />
                    <span>{lawyer.location}</span>
                  </div>
                </div>

                <div className={styles.contactInfo}>
                  <a href={`tel:${lawyer.phone}`} className={styles.contactLink}>
                    <Phone className={styles.contactIcon} />
                    Call
                  </a>
                  <a href={`mailto:${lawyer.email}`} className={styles.contactLink}>
                    <Mail className={styles.contactIcon} />
                    Email
                  </a>
                </div>

                <button className={styles.consultButton}>
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}