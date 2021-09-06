const boostSection = document.querySelector('.boost')

/**
 * Observe intersection for .boost section
 * Animate on intersect
 */
const observeBoostIntersect = () => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			// intersects Boost
			if (entry.intersectionRatio > 0) {
				boostSection.classList.add('anim')
			}
			else {
				boostSection.classList.remove('anim')
			}
		})
	})

	observer.observe(boostSection)
}

observeBoostIntersect()

/**
 * Setup particles js animation
 */
particlesJS.load('particles-js', 'particles.json', () => {
	console.log(particlesJS)
})