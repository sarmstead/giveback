# Stark Intelligence is building a new feature for Tortuga. 
# The AI will listen for a phrase and say it back in reverse.

# Expected input: I love apples
# Expected output: apples love I

si_input = 'I love apples'

def si_backwords(phrase)
  phrase_array = phrase.split(' ')
  reversed_phrase_array = phrase_array.reverse
  reversed_phrase_array.join(' ')
end

p si_backwords(si_input)

# StreamBean wants to create a simplified way for users to add their favorite streaming services.
# Create a function that takes in a new provider and adds it to an existing list for a user.
# The function should not add duplicate providers.

# Existing list: ['Disney+', 'Hulu']
# Expected input: 'Good Evening California'
# Expected output: ['Disney+', 'Hulu', 'Good Evening California']

sb_list = ['Disney+', 'Hulu']

sb_input = 'Good Evening California'

sb_duplicate_input = 'Disney+'

class StreamBean
  def initialize (provider_list)
    @provider_list = provider_list
  end

  def add_service(service)
    is_duplicate = []
    @provider_list.each do |provider|
      if service.downcase == provider.downcase
        is_duplicate << 'yes'
      else
        is_duplicate << 'no'
      end
    end

    @provider_list << service if !is_duplicate.include?('yes') 
  end
end

bean = StreamBean.new(sb_list)

p bean.add_service(sb_input)