import React from 'react'
import { Star } from 'lucide-react';

function Testimonials() {
    const testimonials = [
        {
            name: 'Ahmet Y.',
            role: 'Yazılım Geliştirici',
            avatar: '👨‍💻',
            content: 'Mindsprout sayesinde günlük 4 saat kesintisiz kod yazabiliyorum. 3D arsa sistemi beni gerçekten motive ediyor!',
            rating: 5
        },
        {
            name: 'Zeynep K.',
            role: 'Üniversite Öğrencisi',
            avatar: '👩‍🎓',
            content: 'Sınav dönemlerinde kurtarıcım oldu. Hem çalışıyorum hem de arsam büyüyor. Streak\'imi 45 güne çıkardım!',
            rating: 5
        },
        {
            name: 'Mehmet S.',
            role: 'Freelancer',
            avatar: '💼',
            content: 'Pomodoro tekniğini seviyordum ama bu kadar eğlenceli olmamıştı. Mindsprout bir harika!',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="bg-linear-to-br from-emerald-600 to-teal-600 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Kullanıcılarımız Ne Diyor?
                    </h2>
                    <p className="text-xl text-emerald-100">Binlerce mutlu kullanıcıdan bazıları</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-5xl">{testimonial.avatar}</div>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials