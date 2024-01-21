import React, { useState } from 'react'
import { iconOptions } from './icons'

type IconOption = {
    value: string
    label: string
}

const getIconOption = (rating: number): IconOption | null => {
    if (isNaN(rating) || rating < 1) {
        return null // Return null if rating is NaN or less than 1
    } else if (rating >= 1 && rating <= 49) {
        return iconOptions[0]
    } else if (rating >= 50 && rating <= 149) {
        return iconOptions[1]
    } else if (rating >= 150 && rating <= 299) {
        return iconOptions[2]
    } else if (rating >= 300 && rating <= 599) {
        return iconOptions[3]
    } else if (rating >= 600 && rating <= 1199) {
        return iconOptions[4]
    } else if (rating >= 1200 && rating <= 2499) {
        return iconOptions[5]
    } else if (rating >= 2500 && rating <= 4999) {
        return iconOptions[6]
    } else if (rating >= 5000 && rating <= 5539) {
        return iconOptions[7]
    } else if (rating >= 5540 && rating <= 6619) {
        return iconOptions[8]
    } else if (rating >= 6620 && rating <= 8239) {
        return iconOptions[9]
    } else if (rating >= 8240 && rating <= 10399) {
        return iconOptions[10]
    } else if (rating >= 10400 && rating <= 13099) {
        return iconOptions[11]
    } else if (rating >= 13100 && rating <= 16339) {
        return iconOptions[12]
    } else if (rating >= 16340 && rating <= 20119) {
        return iconOptions[13]
    } else if (rating >= 20120 && rating <= 24439) {
        return iconOptions[14]
    } else if (rating >= 24440 && rating <= 29299) {
        return iconOptions[15]
    } else if (rating >= 29300 && rating <= 34699) {
        return iconOptions[16]
    } else if (rating >= 34700 && rating <= 40639) {
        return iconOptions[17]
    } else if (rating >= 40640 && rating <= 47119) {
        return iconOptions[18]
    } else if (rating >= 47120 && rating <= 54139) {
        return iconOptions[19]
    } else if (rating >= 54140 && rating <= 61699) {
        return iconOptions[20]
    } else if (rating >= 61700 && rating <= 69799) {
        return iconOptions[21]
    } else if (rating >= 69800 && rating <= 78439) {
        return iconOptions[22]
    } else if (rating >= 78440 && rating <= 87619) {
        return iconOptions[23]
    } else if (rating >= 87620 && rating <= 97339) {
        return iconOptions[24]
    } else if (rating >= 97340 && rating <= 107599) {
        return iconOptions[25]
    } else if (rating >= 107600 && rating <= 118399) {
        return iconOptions[26]
    } else if (rating >= 118400 && rating <= 129739) {
        return iconOptions[27]
    } else if (rating >= 129740 && rating <= 141619) {
        return iconOptions[28]
    } else if (rating >= 141620 && rating <= 154039) {
        return iconOptions[29]
    } else if (rating >= 154040 && rating <= 165999) {
        return iconOptions[30]
    } else if (rating >= 166000 && rating <= 179499) {
        return iconOptions[31]
    } else if (rating >= 179500 && rating <= 193539) {
        return iconOptions[32]
    } else if (rating >= 193540 && rating <= 208119) {
        return iconOptions[33]
    } else if (rating >= 208120 && rating <= 223239) {
        return iconOptions[34]
    } else if (rating >= 223240 && rating <= 238899) {
        return iconOptions[35]
    } else if (rating >= 238900 && rating <= 254099) {
        return iconOptions[36]
    } else if (rating >= 255100 && rating <= 271839) {
        return iconOptions[37]
    } else if (rating >= 271840 && rating <= 289119) {
        return iconOptions[38]
    } else if (rating >= 289120 && rating <= 306939) {
        return iconOptions[39]
    } else if (rating >= 306940 && rating <= 325299) {
        return iconOptions[40]
    } else if (rating >= 325300 && rating <= 344199) {
        return iconOptions[41]
    } else if (rating >= 344200 && rating <= 363639) {
        return iconOptions[42]
    } else if (rating >= 363640 && rating <= 383619) {
        return iconOptions[43]
    } else if (rating >= 383620 && rating <= 404139) {
        return iconOptions[44]
    } else if (rating >= 425200 && rating <= 446799) {
        return iconOptions[45]
    } else if (rating >= 446800 && rating <= 468939) {
        return iconOptions[46]
    } else if (rating >= 468940 && rating <= 499999) {
        return iconOptions[47]
    } else if (rating >= 500000) {
        return iconOptions[48]
    } else {
        return iconOptions[0]
    }
}

const RatingComponent: React.FC = () => {
    const [rating, setRating] = useState<string>('1')

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRating = event.target.value.replace(/[^0-9.]/g, '') // Allow only digits and dot
        setRating(newRating)
    }

    const resetRating = () => {
        setRating('')
    }

    const formattedRating = isNaN(parseFloat(rating))
        ? ''
        : parseFloat(rating).toLocaleString('en-US', {
              maximumFractionDigits: 3,
          })

    const selectedIcon = getIconOption(parseFloat(rating) || 0) // Added || 0 to handle NaN

    return (
        <div>
            <label>Звання за отримані бали:</label>
            <input
                type="text"
                pattern="\d*"
                inputMode="numeric"
                value={formattedRating}
                onChange={handleRatingChange}
            />
            <button onClick={resetRating}>Reset</button>
            {selectedIcon && (
                <div>
                    <img src={selectedIcon.value} alt={selectedIcon.label} />
                    <p>{selectedIcon.label}</p>
                </div>
            )}
        </div>
    )
}

export default RatingComponent
