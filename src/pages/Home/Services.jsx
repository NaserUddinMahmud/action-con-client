
const Services = () => {
    return (
        <div className="p-10">
            <h2 className='text-5xl text-center py-6'>Our Services</h2>
            <div className="md:flex justify-center gap-16 mx-32 text-center">
               <div>
               <img className="w-44 rounded-3xl  border-8  border-red-200 hover:-translate-y-1 hover:border-red-500 transition duration-500 ease-in-out" src="data:image/png;base64,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" alt="" />
               <p>100% Genuine Products</p>
               </div>
                <div><img className="w-44 rounded-3xl  border-8  border-red-200 hover:-translate-y-1 hover:border-red-500 transition duration-500 ease-in-out" src="data:image/png;base64,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" alt="" />
                <p>Money Back Gueranty</p></div>
                <div>
                <img className="w-44 rounded-3xl  border-8  border-red-200 hover:-translate-y-1 hover:border-red-500 transition duration-500 ease-in-out" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8dHRsAAAD29vYbGxkHBwDS0tKBgYDa2toZGReEhIPv7+8MDAjo6OhmZmUREQ4sLCqcnJw6Ojh3d3bh4eFXV1bKyspvb2+1tbWOjo5OTk6urq7CwsEnJyUyMjGlpaVBQUCpDM6fAAAC50lEQVRoge2Z3ZpDMBCGGaFNpWxLFUvb+7/KbW13KxFkDGfznnrik5HMr+cxDMMwDMMwDMMwDLMtAQWq+AFI3PYk9Tv4JNSDZIBE0eR9IG3/kdLUhcwJ6vFN0uTlOSbI576gyacXgrpXgNRAf4y6UuT35/arT4u9CFBR5L34qJF/I/XhmyQ/IMPdRCjWlS9x24fjuvJX1O6FWOb0jnbyE/bsJQaZix+oRmMIUt1PDeA2b48IiM7OQPTchpr3gwUxzhmk/vmXFp4fEM4GwfjhGM6dzqHw87/soxRPs0I9p59Xu4MLSerghtOeXNHtv579/Y6UoYN80lvQvPQhGX0hkno+IVCZ9sGr6tfzdyQ8aCu+O31SJPyndDh8cNLXdPkjZMaboh2eq3JwEIOo17lO2OnqEOJRLvkHNKbNDp2+lgrsHM7wMizJ7m6gfwKBAiFv8bKZqR/UEoW7X7amHJfXhdUO5R7FwVlfnpvh8t8LS8jF3AsgaYkWb28F0VJ5bNZpJdzNC9nBpV0jDBLxIHaDWvu+5Utdfe8a6tfJSMCoQNs1TIqQN2wPxJoSh3wY8gkoO8RC344y415QmZn5m3qLvwJ354u2yj035QfBcBxqp8MmjygBz6vLi9BdPVrf+OlExt2cNCp/A9uPe/zc9HIbOISJeFtslnx9CMfDLbKNsQTRjh98dCMBjzyPn7xse+OriZ4jtZvrgFn+9HEpnany4y432P7XTzXbg+0Dv7xNdHmqqbxKuGZk1qTs78nEr/e8Y/TGUlGkZeTK0H/Aad89cY12gzdM+YvBLobyyD7vINbJ2d7Uh6A1DpFIkeOd+MsIdhORasjVcCASPdwyfz5qPNWYiydPnI1Yv4XIvpCepEqHpq5J2ddPJW46lcue+cWiAcPp02RWLXYyWPj/+08XVvSl6EpyoeCCH1Dsa+hCSAotIrPWCO71qytwXba+SdRzdUIbLNEG4uRpOsMwDMMwDMMwDMMwE/wAt1g5S+xbtnoAAAAASUVORK5CYII=" alt="" />
                <p>Super Fast Delivery</p>
                </div>
                <div>
                <img className="w-44 rounded-3xl  border-8  border-red-200 hover:-translate-y-1 hover:border-red-500 transition duration-500 ease-in-out" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX///8AAADPz8/e3t7k5OQlJSVLS0teXl4wMDDx8fFhYWGxsbG1tbX6+vrq6ur19fU4ODjDw8PX19cSEhJGRkaPj49XV1d8fHyqqqqWlpacnJyHh4dBQUEaGhpra2u9vb10dHST8E1mAAAD9UlEQVRoge1a2YLqIAy1i3bRoi12X///K28D6lBHKZR07gvnbUbgAAnhJPRwsLCwsLCwsLDYGdfIrdohLmYEQ9mkJEr+htirypvzBhrX6e7EWXN8530hSKP9iJMxXiyW9j2l4n+6fCf25Pxacj80VeqR2chJ5GeXpr2/6EtvB+bxYWQa1P7116/ROD1/Lwkytf/Y7b7JvjUhafFoc0Glrh/eNMqbkZab/4638Y9Fd+76KSY533ispbs9G69Six8Z3/kShbpiYw3qkWtkG18guFzDF63TJTvhkDPqo67vlKyXYaBhrlP42v3YlO/6/QScGfWvUKKAkfU0uN5S5mXb+jLyeDO1BwE82Go1tmf1Vm64IfotG87BbL7xWm+B2iQ6DkC+ae4u9DSKjdF9Y4BLtnYU4G3cdbBWuN3YP4N0+oPAlFeuzHUkR914DMi3n2wRzGk0+5Bw7oOgAJJYf+EVzrLnOw3iup7F52XTr8pMC7Guq0MgP6FQs7ge6HQoMZycI5m1c69xmSZwtrFSjFrP21w0sXfgwU3DbVu8LZ8TZgjOyiIiKXRarwJW4qo2Bs1wQ6M+XHQ0BJi7xeMmOgY/Y5r7wK6lk2poK3UMpIDZ2Y6qJ/y0IRuQAdaiGqDnYN5hJvC1xj7OuVyBSM1CuiL3lWXveFWbCHy3URnPK3mNIcxNxdqDOT+qVoEa5wcY5bpUGK+RN20dEeaVi/NiPGnAYjUGWo/phe+8qXTJOOUlHWu6UkKA6OdM3Cs8KB7czW6UpINEmNs5YhnS96MLwjh+0vmhscnB2LcnHZOs+bemEUzz5yykxlp1WMw+go38dtSyN1lHteXtErAWKvxdSDzIffOG2eKhSckErCYGyEYS39y3YxUY3imgQcSqx9lyW27Lbbn/A/f5P3Fnb9IiFG7ALSC3ZV4n0+n+PM9e6OqYauViqRaoLD+JFwYvdfLHj8gXNQR57QpEPHWFphKNowIiarSUynUQe9uqQS+QyZFJHEUw2TvBAq785UU20ZAJy2PH3xa1alMfwR/qaMfzg1C6jZn4pB+b50UkEMa7rUjuaHo1NfOzJ/LXeNP6UkjONqrCSgajJj7duiBXc1tWlUJi5vRE/bzAPq0kbrvBn7m7HT/akKKQ5227Am60I/Y3E6oIHMRqribYyxZmfU8HcJPQ/b9R+gxI/XucJxNtRDfJtnvnatzTFdnrtxN/EhqseBLu6Q4+v0jLXxzV43LY4bOpF67D6/Y7iXj+F+Xx7huS6tuXcrFHDUXsOkhDP3K3IKDlMgQDbjuculAEkMM3TvFffCF5Jb4A8pQ2uN+pKU6F+6CpiN2G5BIXE+aLioWFhYWFhYXFOv4B3p4qT+SvHYkAAAAASUVORK5CYII=" alt="" />
                <p>24/7 Customer Support</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Services;