class Movie < ApplicationRecord
    has_many:reviews

    before_create :slugify

    def slugify
    self.slug = name.parameterize
    end

    def avg_score
        return 0 unless reviews.count.positive?

        (reviews.sum(:score).to_f / reviews.count.to_f).to_f
    end

end
